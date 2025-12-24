function DocModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed scale inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white max-w-2xl w-full rounded-xl p-6 relative">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-2">
          {data.title}
        </h3>

        <p className="text-sm text-slate-500 mb-4">
          {data.org} • {data.year}
        </p>

        {/* IMAGE */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full rounded-lg border"
        />
      </div>
    </div>
  );
}

export default DocModal;
