
export default function Upload() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">This is El Instituto Upload Page</h1>

        <form action="/api/upload" method="post" encType="multipart/form-data">
          <input type="file" name="file" />
          <button type="submit">Upload</button>
        </form>
        </div>
    </div>
    );
}
        