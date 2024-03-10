import { builder } from "../builder";
import { prisma } from "@/app/lib/db";

builder.prismaObject("Customer", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
    image_url: t.exposeString("image_url"),
    invoices: t.relation("Invoices"),
  }),
});

builder.queryField("customers", (t) =>
  // 2.
  t.prismaField({
    // 3.
    type: ["Customer"],
    // 4.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.customer.findMany({ ...query }),
  }),
);
