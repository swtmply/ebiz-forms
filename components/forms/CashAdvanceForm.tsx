import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CashAdvanceInput } from "../../lib/types";
import moment from "moment";

export const CashAdvanceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CashAdvanceInput>();

  const onSubmit: SubmitHandler<CashAdvanceInput> = (data) => console.log(data);
  const today = new Date().toLocaleDateString();

  return (
    <React.Fragment>
      <div className=" bg-white px-3">
        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-l py-2">Date:</h1>
          <p className="text-s">{moment(today).format("ll")}</p>
        </div>
        <form>
          <div className="flex items-center gap-20">
            <div className="py-2">
              <p className="py-2">
                Amount of Cash Requested:<span className="text-red-500">*</span>
              </p>
              <input
                className="rounded-md border border-grey-300"
                {...register("cashRequested", {
                  required: "Please specify cash requested",
                  max: 50000,
                  min: 500,
                })}
              />
            </div>
            <div className="py-2">
              <p>Date of Liquidation</p>
              <input
                type="date"
                {...register("liquidationDate", {
                  required: "Please select date",
                })}
              />
            </div>
          </div>

          <div className="py-2">
            <p className="py-2">Purpose:</p>
            <textarea
              className="rounded-md border border-grey-300"
              {...register("purpose", {
                required: "Please specify your purpose",
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </div>

          <div className="py-2"></div>
        </form>
      </div>
      <div className="my-2 flex justify-between">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit(onSubmit)}
        >
          Cancel
        </button>
        <div>
          <button
            className=" hover:underline decoration-2 font-bold py-2 px-4 rounded"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button>

          <button
            className="bg-avocado-200 hover:bg-avocado-300 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
