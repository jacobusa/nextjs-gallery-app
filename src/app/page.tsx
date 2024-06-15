import { db } from "~/server/db";

export const dynamic = "force-dynamic";
const mockUrls = [
  `https://utfs.io/f/6bc77d50-d933-408f-9ded-edef0e8fd5a6-na1y5.png`,
  `https://utfs.io/f/e925b09e-477c-4e1e-9572-6c42b3777399-c124hi.png`,
  `https://utfs.io/f/0382f1f1-5bda-4318-9de9-643b1b9a326d-bg5gvd.png`,
  `https://utfs.io/f/bae0afcc-77fc-42eb-acdf-4733f2a2cf79-ci6xtc.png`,
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image.id" />
          </div>
        ))}
      </div>
    </main>
  );
}
