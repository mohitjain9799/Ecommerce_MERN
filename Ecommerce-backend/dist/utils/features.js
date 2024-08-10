import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb://localhost:27017", {
        dbName: "Ecommerce_24",
    })
        .then((c) => console.log(`DB Connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
};
export const invalidateCache = async ({ product, order, admin,
/*review,
userId,
orderId,
productId,*/
 }) => {
    /*if (review) {
      await redis.del([`reviews-${productId}`]);
    }*/
    if (product) {
        const productKeys = [
            "latest-products",
            "categories",
            "all-products",
        ];
        //if (typeof productId === "string") productKeys.push(`product-${productId}`);
        /*if (typeof productId === "object")
          productId.forEach((i) => productKeys.push(`product-${i}`));
    
        await redis.del(productKeys);
      }*/
        if (order) {
            const ordersKeys = [
                "all-orders",
                /*`my-orders-${userId}`,
                `order-${orderId}`,*/
            ];
            //  await redis.del(ordersKeys);
        }
        /*if (admin) {
          await redis.del([
            "admin-stats",
            "admin-pie-charts",
            "admin-bar-charts",
            "admin-line-charts",
          ]);*/
    }
};
//3.29.00  for invalidate cache
