// DNS Configuration Checker for Email Deliverability
// Run this with: node check-dns.js

import dns from 'dns';
import { promisify } from 'util';

const resolveTxt = promisify(dns.resolveTxt);
const resolveMx = promisify(dns.resolveMx);

console.log('🔍 Checking DNS Configuration for Email Deliverability...\n');

// Get domain from environment or prompt
const domain = process.env.DOMAIN || 'wafipix.com'; // Change this to your domain

async function checkDNSRecords() {
  try {
    console.log(`📧 Checking DNS records for: ${domain}\n`);

    // Check SPF record
    try {
      const spfRecords = await resolveTxt(domain);
      const spfRecord = spfRecords.flat().find(record => record.includes('v=spf1'));
      
      if (spfRecord) {
        console.log('✅ SPF Record Found:');
        console.log(`   ${spfRecord}`);
        
        if (spfRecord.includes('include:_spf.google.com')) {
          console.log('   ✅ Includes Google SPF (good for Gmail)');
        } else {
          console.log('   ⚠️  Consider adding Google SPF for better deliverability');
        }
      } else {
        console.log('❌ SPF Record Missing');
        console.log('   Add this TXT record: v=spf1 include:_spf.google.com ~all');
      }
    } catch (error) {
      console.log('❌ SPF Record Missing or Error');
      console.log('   Add this TXT record: v=spf1 include:_spf.google.com ~all');
    }

    console.log('');

    // Check DKIM record
    try {
      const dkimRecords = await resolveTxt('default._domainkey.' + domain);
      const dkimRecord = dkimRecords.flat().find(record => record.includes('v=DKIM1'));
      
      if (dkimRecord) {
        console.log('✅ DKIM Record Found:');
        console.log(`   ${dkimRecord.substring(0, 50)}...`);
        console.log('   ✅ DKIM authentication enabled');
      } else {
        console.log('❌ DKIM Record Missing');
        console.log('   Add this TXT record: default._domainkey');
        console.log('   Value: v=DKIM1; k=rsa; p=YOUR_PUBLIC_KEY');
      }
    } catch (error) {
      console.log('❌ DKIM Record Missing or Error');
      console.log('   Add this TXT record: default._domainkey');
      console.log('   Value: v=DKIM1; k=rsa; p=YOUR_PUBLIC_KEY');
    }

    console.log('');

    // Check DMARC record
    try {
      const dmarcRecords = await resolveTxt('_dmarc.' + domain);
      const dmarcRecord = dmarcRecords.flat().find(record => record.includes('v=DMARC1'));
      
      if (dmarcRecord) {
        console.log('✅ DMARC Record Found:');
        console.log(`   ${dmarcRecord}`);
        
        if (dmarcRecord.includes('p=quarantine')) {
          console.log('   ✅ Policy set to quarantine (good for reputation)');
        } else if (dmarcRecord.includes('p=reject')) {
          console.log('   ✅ Policy set to reject (strictest)');
        } else {
          console.log('   ⚠️  Consider setting policy to quarantine or reject');
        }
      } else {
        console.log('❌ DMARC Record Missing');
        console.log('   Add this TXT record: _dmarc');
        console.log('   Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@' + domain + ';');
      }
    } catch (error) {
      console.log('❌ DMARC Record Missing or Error');
      console.log('   Add this TXT record: _dmarc');
      console.log('   Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@' + domain + ';');
    }

    console.log('');

    // Check MX records
    try {
      const mxRecords = await resolveMx(domain);
      console.log('✅ MX Records Found:');
      mxRecords.forEach((mx, index) => {
        console.log(`   ${index + 1}. ${mx.exchange} (Priority: ${mx.priority})`);
      });
    } catch (error) {
      console.log('❌ MX Records Missing or Error');
      console.log('   This is critical for email delivery!');
    }

    console.log('');

    // Check A record
    try {
      const aRecords = await promisify(dns.resolve4)(domain);
      console.log('✅ A Record Found:');
      aRecords.forEach(ip => {
        console.log(`   ${ip}`);
      });
    } catch (error) {
      console.log('❌ A Record Missing or Error');
    }

  } catch (error) {
    console.error('❌ Error checking DNS records:', error.message);
  }
}

async function checkEmailProvider() {
  console.log('📧 Email Provider Recommendations:\n');
  
  if (domain.includes('gmail.com')) {
    console.log('✅ Using Gmail - Good deliverability');
    console.log('   - SPF should include: include:_spf.google.com');
    console.log('   - DKIM handled by Google');
    console.log('   - DMARC recommended: p=quarantine');
  } else if (domain.includes('outlook.com') || domain.includes('hotmail.com')) {
    console.log('✅ Using Microsoft - Good deliverability');
    console.log('   - SPF should include: include:spf.protection.outlook.com');
    console.log('   - DKIM handled by Microsoft');
    console.log('   - DMARC recommended: p=quarantine');
  } else {
    console.log('🌐 Custom Domain Detected');
    console.log('   - Requires manual SPF, DKIM, DMARC setup');
    console.log('   - Consider using Gmail for Business for better deliverability');
    console.log('   - Or ensure proper DNS authentication records');
  }
}

async function main() {
  await checkDNSRecords();
  console.log('─'.repeat(60));
  await checkEmailProvider();
  
  console.log('\n📋 Next Steps:');
  console.log('1. Add missing DNS records to your domain provider');
  console.log('2. Wait 24-48 hours for DNS propagation');
  console.log('3. Test email delivery with different providers');
  console.log('4. Monitor spam folder placement');
  console.log('5. Use tools like mail-tester.com for detailed analysis');
  
  console.log('\n🔗 Useful Tools:');
  console.log('- DNS Checker: https://mxtoolbox.com/');
  console.log('- Email Tester: https://www.mail-tester.com/');
  console.log('- SPF Validator: https://www.spf-record.com/');
  console.log('- DMARC Analyzer: https://dmarc.postmarkapp.com/');
}

// Run the check
main().catch(console.error);
