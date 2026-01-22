import { CheckCircle, AlertCircle, FileText } from "lucide-react";
import { useState } from "react";
type DocumentStatus = "verified" | "pending" | "query";

interface DocumentItem {
  id: string;
  title: string;
  status: DocumentStatus;
  remarks: string;
}

export default function Verification() {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: "birthCert",
      title: "Birth Certificate",
      status: "verified",
      remarks: "Document verified successfully",
    },
    {
      id: "tc",
      title: "Previous School TC",
      status: "pending",
      remarks: "",
    },
    {
      id: "address",
      title: "Address Proof",
      status: "verified",
      remarks: "Aadhaar card verified",
    },
    {
      id: "photo",
      title: "Passport Size Photo",
      status: "query",
      remarks: "Photo quality is low, please reupload",
    },
    {
      id: "category",
      title: "Category Certificate",
      status: "pending",
      remarks: "",
    },
  ]);
  
  const updateDocument = (
    id: string,
    updates: Partial<DocumentItem>
  ) => {
      setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, ...updates } : doc
      )
    );
  };
  
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= LEFT : STUDENT PROFILE ================= */}
        <div className="lg:col-span-1 bg-white border rounded-xl p-6 space-y-6">
          <h2 className="text-lg font-semibold">Student Profile</h2>

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold text-gray-500">
              RK
            </div>
            <h3 className="mt-4 font-semibold text-lg">
              Rajesh Kumar
            </h3>
            <p className="text-sm text-gray-500">
              ADM-2026-0145
            </p>

            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                Grade 1
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                Science
              </span>
            </div>
          </div>

          <div className="border-t pt-4 space-y-3 text-sm">
            <ProfileRow label="Applied On" value="15 Jan 2026" />
            <ProfileRow label="Quota" value="General" />
            <ProfileRow label="Documents" value="5 Uploaded" />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-medium text-blue-700">
              Verification Progress
            </p>
            <p className="text-sm text-blue-600">
              2 verified, 2 pending, 1 query raised
            </p>
          </div>
        </div>

        {/* ================= RIGHT : DOCUMENT VERIFICATION ================= */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-6 space-y-6">
          <h2 className="text-lg font-semibold">
            Document Verification
          </h2>
          {documents.map((doc) => (
  <DocumentCard
    key={doc.id}
    title={doc.title}
    status={doc.status}
    remarks={doc.remarks}
    onVerify={() =>
      updateDocument(doc.id, { status: "verified" })
    }
    onQuery={() =>
      updateDocument(doc.id, { status: "query" })
    }
    onRemarkChange={(text) =>
      updateDocument(doc.id, { remarks: text })
    }
  />
))}


          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button className="px-6 py-2 border rounded-lg">
              Save Progress
            </button>
            <button
  onClick={() =>
    setDocuments((prev) =>
      prev.map((doc) => ({
        ...doc,
        status: "verified",
      }))
    )
  }
  className="px-6 py-2 bg-green-600 text-white rounded-lg"
>
  Mark All Verified
</button>

            <button className="px-6 py-2 bg-red-500 text-white rounded-lg">
              Reject Application
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
function ProfileRow({ label, value }: any) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function DocumentCard({
  title,
  status,
  remarks,
  onVerify,
  onQuery,
  onRemarkChange,
}: {
  title: string;
  status: "verified" | "pending" | "query";
  remarks: string;
  onVerify: () => void;
  onQuery: () => void;
  onRemarkChange: (text: string) => void;
})
 {
  const statusUI = {
    verified: {
      text: "Verified",
      badge: "bg-green-100 text-green-700",
      button: "bg-green-600 text-white",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    pending: {
      text: "Pending",
      badge: "bg-yellow-100 text-yellow-700",
      button: "bg-gray-100",
      icon: <AlertCircle className="w-4 h-4" />,
    },
    query: {
      text: "Query Raised",
      badge: "bg-red-100 text-red-600",
      button: "bg-red-500 text-white",
      icon: <AlertCircle className="w-4 h-4" />,
    },
  }[status];

  return (
    <div className="border rounded-xl p-5 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <FileText />
          </div>
          <div>
            <p className="font-medium">{title}</p>
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full ${statusUI.badge}`}
            >
              {statusUI.icon} {statusUI.text}
            </span>
          </div>
        </div>

        <button className="px-4 py-2 border rounded-lg text-blue-600">
          View Document
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Remarks</p>
        <textarea
  className="w-full border rounded-lg p-3 text-sm"
  value={remarks}
  onChange={(e) => onRemarkChange(e.target.value)}
/>

      </div>

      <div className="flex gap-3">
  <button
    onClick={onVerify}
    className={`flex-1 py-2 rounded-lg ${statusUI.button}`}
  >
    Verified
  </button>

  <button
    onClick={onQuery}
    className="flex-1 py-2 rounded-lg bg-red-500 text-white"
  >
    Query
  </button>
</div>

    </div>
  );
}
