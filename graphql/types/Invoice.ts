import { builder } from "../builder";
import { prisma } from "@/app/lib/db";

builder.prismaObject("Invoice", {
  fields: (t) => ({
    id: t.exposeID("id"),
    customer: t.relation("customer"),
    customer_id: t.exposeString("customer_id"),
    amount: t.exposeInt("amount"),
    status: t.exposeString("status"),
  }),
});

builder.queryField("invoices", (t) =>
  // 2.
  t.prismaField({
    // 3.
    type: ["Invoice"],
    // 4.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.invoice.findMany({ ...query }),
  }),
);
