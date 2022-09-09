import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    times: {
      type: Number,
      required: true,
    },
    image: {
      before: String,
      required: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
)

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default User;
