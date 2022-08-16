import { trpc } from "@/utils/trpc";

const IndexPage = () => {
  const hello = trpc.useQuery(["hello", { message: "sdf" }]);
  return (
    <div>
      <p>home</p>
    </div>
  );
};

export default IndexPage;
