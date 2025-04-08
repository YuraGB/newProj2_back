import { Context } from "hono";
import { categoryListService, categoryService } from "@/servises/category";

export const categoryController = async (c: Context) => {
  const categoryName = c.req.param("categoryName");
  if (!categoryName) {
    return c.json({ error: "Category name is required" }, 400);
  }

  const products = await categoryService(categoryName);

  if (!products) {
    return c.json({ error: "There are no products in this category" });
  }
  return c.json(products);
};

export const categoryListController = async (c: Context) => {
  const categoryList = await categoryListService();

  if (!categoryList) {
    return c.json({ error: "There are no products in this category" });
  }

  return c.json(categoryList);
};
