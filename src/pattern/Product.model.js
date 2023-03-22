// import db from "../../database/mongo";
// import { ObjectId } from "mongoose";
// interface IProduct extends db.Document {
//     name: string;
//     code?: string;
//     category?: ObjectId;
//     attributes?: Array<ObjectId>;
//     price: any;
//     cartDetails: any;
//     variations: any;
//     quantity: number;
//     sku: string;
//     unit: string;
//     rate: number;
//     hints: number;
//     rates: Array<any>;
//     is_hot: boolean;
//     googleMap?: string;
// }
// const Product: db.Schema<IProduct> = new db.Schema(
//     {
//         admin: { type: db.SchemaTypes.ObjectId, ref: "Admin" },
//         addToCartType: { type: String, enum: ["addToCart", "facebook", "call", "link", "whatssapp"] },
//         addToCartLink: String,
//         upc: String,
//         rates: [
//             {
//                 user: { type: db.SchemaTypes.ObjectId, ref: "User" },
//                 rate: { type: Number, default: 0 },
//                 comment: String,
//                 date: { type: Date, default: new Date() },
//             },
//         ],
//         rate: { type: Number, default: 0 },
//         name: {
//             ar: {
//                 type: String,
//             },
//             en: {
//                 type: String,
//             },
//         },
//         slug: String,
//         stringQuery: String,
//         trash: { type: Boolean, default: false },
//         description: {
//             ar: { type: String },
//             en: { type: String },
//         },
//         shortDesc: {
//             ar: String,
//             en: String,
//         },
//         brand: {
//             type: db.SchemaTypes.ObjectId,
//             ref: "Brand",
//         },
//         category: {
//             type: db.SchemaTypes.ObjectId,
//             ref: "Category",
//             required: [true, "Category is required"],
//         },
//         type: {
//             type: Number,
//             enum: [0, 1, 2],
//         },
//         sku: String,
//         weight: { type: Number, default: 0 },
//         quantity: {
//             type: Number,
//             default: 0,
//             min: [0, "at least zero"],
//         },
//         gallaries: [],
//         googleMap: String,
//         newPrice: Number,
//         hasDiscount: { type: Boolean, default: false },
//         discount: { type: Number, default: 0 },
//         hints: { type: Number, default: 0 },
//         orders: { type: Number, default: 0 },
//         cartDetails: {
//             add: [{ type: Date, default: Date.now() }],
//             removed: [{ type: Date, default: Date.now() }],
//         },
//         attributes: [{ type: db.SchemaTypes.ObjectId, ref: "Attribute" }],
//         images: [
//             {
//                 id: Number,
//                 sort: Number,
//                 url: String,
//             },
//         ],
//         price: {
//             user: { type: Number, default: 1 },
//             admin: Number || String || null,
//             profit: { type: Number, default: 0 },
//             discount: {
//                 type: { type: String, enum: ["ratio", "fixed", "noDiscount"] },
//                 value: Number,
//                 active: { type: Boolean, default: false },
//             },
//             finalPrice: { type: Number, default: 1 },
//         },
//         // alone options
//         variations: [
//             {
//                 image: { type: Number, default: 1 },
//                 price: { type: Number, default: 0 },
//                 adminPrice: { type: Number, default: 0 },
//                 discount: { type: Number, default: 0 },
//                 newPrice: { type: Number, default: 0 },
//                 attributes: [
//                     {
//                         type: db.SchemaTypes.ObjectId,
//                         ref: "Attribute",
//                     },
//                 ],
//                 warehouses: [
//                     {
//                         warehouseId: { type: db.SchemaTypes.ObjectId, ref: "Warehouse" },
//                         quantity: { type: Number, default: 0 },
//                     },
//                 ],
//             },
//         ],
//         // availabel filters with availabel attributes
//         availableFilters: [
//             {
//                 filter: {
//                     type: db.SchemaTypes.ObjectId,
//                     ref: "Filter",
//                 },
//                 attributes: [{ type: db.SchemaTypes.ObjectId, ref: "Attribute" }],
//             },
//         ],
//         // debendes options
//         options: [
//             {
//                 attr: { type: db.SchemaTypes.ObjectId, ref: "Attribute" },
//                 filter: { type: db.SchemaTypes.ObjectId, ref: "Filter" },
//                 price: { type: Number, default: 0 },
//                 newPrice: { type: Number, default: 0 },
//                 discount: { type: Number, default: 0 },
//                 related: [
//                     {
//                         attr: { type: db.SchemaTypes.ObjectId, ref: "Attribute" },
//                         filter: { type: db.SchemaTypes.ObjectId, ref: "Filter" },
//                         price: { type: Number, default: 0 },
//                         newPrice: { type: Number, default: 0 },
//                         discount: { type: Number, default: 0 },
//                     },
//                 ],
//             },
//         ],
//         is_active: { type: Boolean, default: true },
//         is_new: { type: Boolean, default: false },
//         is_hot: { type: Boolean, default: false },
//         installment: {
//             active: { type: Boolean, default: false },
//             id: { type: db.SchemaTypes.ObjectId, ref: "Installment" },
//             details: [{ monthes: Number, ratio: Number, unit: Number }],
//         },
//         tags: [{ type: String }],
//         unit: String,
//     },
//     {
//         timestamps: true,
//     }
// );
// export default db.model < IProduct > ("Product", Product);