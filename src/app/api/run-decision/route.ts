export async function GET() {
  const data = {
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
