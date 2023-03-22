// import db from '../../database/mongo';
// import { ObjectId } from 'mongoose';
// export interface ICart extends db.Document {
//     admin: ObjectId;
//     user?: ObjectId;
//     payment: ObjectId;
//     address: any;
//     estimateDeliveryTime: any;
//     items: Array<any>;
//     total: number;
//     isLocked: boolean;
//     financial: {
//         taxFees: Object;
//         paymentFees: number;
//         couponDiscount: number;
//         totalItemsCost: number;
//     };
//     coupon: ObjectId;
// }
// const Cart: db.Schema<ICart> = new db.Schema(
//     {
//         admin: { type: db.SchemaTypes.ObjectId, ref: "Admin" },
//         payment: { type: db.SchemaTypes.ObjectId, ref: "Payment" },
//         user: {
//             type: db.SchemaTypes.ObjectId,
//             ref: "User",
//             required: false,
//         },
//         estimateDeliveryTime: {},
//         address: {
//             country: { type: db.SchemaTypes.ObjectId, ref: "Country" },
//             city: {},
//             area: String,
//             name: String,
//             phone: String,
//             address: String,
//             type: { type: String, enum: ["office", "home", "work", "other"] },
//             buildingNumber: String,
//             flatNumber: String,
//             floorNumber: String,
//             spacialMark: String,
//             isDefault: { type: Boolean, default: false },
//             specialMark: String,
//             long: String,
//             lat: String,
//         },
//         items: [
//             {
//                 product: { type: db.SchemaTypes.ObjectId, ref: "Product" },
//                 price: Number,
//                 quantity: Number,
//                 total: Number,
//                 option: {
//                     price: Number,
//                     newPrice: Number,
//                     discount: Number,
//                     attributes: [{ type: db.SchemaTypes.ObjectId, ref: "Attribute" }],
//                     _id: String,
//                 },
//             },
//         ],
//         isLocked: { type: Boolean, default: false },
//         coupon: {
//             type: db.SchemaTypes.ObjectId,
//             ref: "Coupon",
//         },
//         financial: {
//             taxFees: { type: Number, default: 0 },
//             paymentFees: { type: Number, default: 0 },
//             deliveryFees: { type: Number, default: 0 },
//             couponDiscount: { type: Number, default: 0 },
//             totalItemsCost: { type: Number, default: 0 },
//         },
//         total: { type: Number, default: 0 },
//     },
//     {
//         timestamps: true,
//     }
// );
// export default db.model < ICart > ("Cart", Cart);