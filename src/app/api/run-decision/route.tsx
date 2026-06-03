import { isSuccessfulStatus } from '@/app/utils/isSuccessfulStatus';
import { toError } from '@/app/utils/toError';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';


export async function GET(
  req: NextRequest,
  params: any
) {
  const headers = req.headers as any;
  const routeParams = await params
  // const magicToken = routeParams.magicToken

  console.log('routerParams is ', routeParams)

//   const escalate = ctx.autonomous_agent && ctx.daily_spend > 500;
//   const refundRisk = ctx.chargebacks > 2 || ctx.refund_attempts > 5;
  
//   if (escalate) {
//     return {
//       decision: "require_review",
//       reason: "autonomous_agent_high_value_action",
//       action: "pause_and_escalate",
//       controls: {
//         human_approval_required: true,
//         rate_limit: "3/day",
//         mfa_required: true,
//       },
//       policy_id: "agent_guardrail_v1",
//     };
//   }

//   if (refundRisk) {
//     return {
//       decision: "deny",
//       reason: "excessive_refund_risk",
//       action: "block_action",
//       controls: {
//         rate_limit: "0/day",
//         review_required: true,
//       },
//       policy_id: "refund_abuse_v2",
//     };
//   }

  let data = {
    decision: "allow",
    reason: "low_risk_action",
    action: "continue",
    controls: {
      rate_limit: "standard",
      review_required: false,
    },
    policy_id: "default_allow_v1",
  };
  
  return Response.json(data, {});

}