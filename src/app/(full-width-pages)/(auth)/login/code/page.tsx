'use client';
import { Suspense } from 'react';

import OtpForm from "@/components/auth/OtpForm";


export default function SignIn() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<div>Loading...</div>}>
        <OtpForm />
      </Suspense>
    </div>
  )
}
