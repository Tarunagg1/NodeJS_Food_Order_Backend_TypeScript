import express, { Application } from "express";
import path from "path";
import { AdminRoutes, CustomerRoute, DeliveryRoute, ShoppingRoute, VenderRoutes } from "../routes";

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const imagePath = path.join(__dirname, "../images");

  app.use("/images", express.static(imagePath));

  app.use("/admin", AdminRoutes);
  app.use("/vendor", VenderRoutes);
  app.use("/customer", CustomerRoute);
  app.use("/delivery", DeliveryRoute);


  app.use(ShoppingRoute);


  return app;
};
