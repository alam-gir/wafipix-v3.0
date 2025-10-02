"use client";

import React from 'react';
import type { WorkDetailPublicResponse } from '@/types/works';

interface WorkDetailDescriptionProps {
  work: WorkDetailPublicResponse;
}

export default function WorkDetailDescription({ work }: WorkDetailDescriptionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-primary [&>*]:text-primary [&_h1]:text-primary [&_h2]:text-primary [&_h3]:text-primary [&_h4]:text-primary [&_h5]:text-primary [&_h6]:text-primary [&_p]:text-primary [&_strong]:text-primary [&_b]:text-primary [&_em]:text-primary [&_i]:text-primary [&_ul]:text-primary [&_ol]:text-primary [&_li]:text-primary [&_blockquote]:text-primary [&_a]:text-primary [&_code]:text-primary [&_pre]:text-primary [&_span]:text-primary [&_div]:text-primary"
            style={{ color: 'hsl(var(--primary))' }}
            dangerouslySetInnerHTML={{ __html: work.description }}
          />
        </div>
      </div>
    </section>
  );
}
