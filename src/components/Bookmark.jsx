/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Bookmark = ({ bookmarks, markAsRead }) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="border py-4 px-8 bg-gray-300">
        <h3 className="text-xl font-semibold">
          Spent time on read: {markAsRead} min
        </h3>
      </div>
      <div className="border py-4 px-8 bg-gray-300">
        <h3 className="text-xl font-semibold border-b mb-5">
          Bookmarked Articles: {bookmarks?.length}
        </h3>
        {bookmarks?.map((bookmark) => (
          <h3 key={bookmark.id} className="text-xl bg-white p-4 mb-4 font-semibold">
            {bookmark?.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
