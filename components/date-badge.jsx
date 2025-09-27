export default function DateBadge({ publishedAt }) {
  return (
    <div className="mt-0.5 line-clamp-1 inline-flex w-fit items-center whitespace-nowrap rounded-md border border-transparent bg-neutral px-2 tracking-tight text-white drop-shadow-md transition-colors focus:outline-none focus:ring-0">
      {new Date(publishedAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </div>
  );
}
