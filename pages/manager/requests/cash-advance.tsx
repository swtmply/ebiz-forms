import React from "react";
import { CashAdvanceForm } from "../../../components/forms/CashAdvanceForm";
import { Layout } from "../../../components/layouts/Layout";
import ReviewLayout from "../../../components/layouts/ReviewLayout";

const CashAdvance = () => {
  return (
    <Layout title="Cash Advance">
      <ReviewLayout title="Cash Advance">
        {/* TODO: Create Cash Advance Form */}
        <CashAdvanceForm />
      </ReviewLayout>
    </Layout>
  );
};

export default CashAdvance;
