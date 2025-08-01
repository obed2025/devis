import { model, Schema } from 'mongoose';

const estimateSchema = new Schema({
  userID: String,
  collaborators: [String],
  isPublic: { type: Boolean, default: false },
  title: String,
  scopeOfWork: String,
  expenses: [
    {
      desc: String,
      unit: String,
      qty: Number,
      unitCost: Number,
    },
  ],
  extraExpenses: [{ desc: String, amount: Number }],
  note: String,
  currency: String,
});

export const Estimates = model('Estimate', estimateSchema);
