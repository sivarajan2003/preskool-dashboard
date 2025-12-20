import FeesTable from "../components/tables/FeesTable";

export default function FeesPage() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-1">
        Fees Management
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Dashboard / Fees
      </p>

      <FeesTable />
    </>
  );
}
