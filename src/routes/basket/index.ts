import { Hono } from "hono";
import {
  addToBasketController,
  getBasketController,
  mergeBasketController,
} from "@/controllers/basket";
import { zValidator } from "@hono/zod-validator";
import {
  basketMergeValidationSchema,
  basketValidationSchema,
} from "@/routes/basket/validation";

const basketRouter = new Hono();

basketRouter.get("/basket", getBasketController);

basketRouter.post(
  "/basket",
  zValidator("json", basketValidationSchema),
  addToBasketController,
);

basketRouter.delete(
  "/basket",
  zValidator("json", basketValidationSchema),
  async (c) => {
    c.json({ products: [] });
  },
);

basketRouter.post(
  "mergeBaskets",
  zValidator("json", basketMergeValidationSchema),
  mergeBasketController,
);

basketRouter.patch(
  "/basket",
  zValidator("json", basketValidationSchema),
  async (c) => {
    console.log("here");
    c.json({ products: [] });
  },
);

export default basketRouter;
