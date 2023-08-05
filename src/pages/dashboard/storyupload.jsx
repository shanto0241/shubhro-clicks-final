import StoryCard from "@/components/StoryCard";
import DashboardLayout from "@/layout/DashboardLayout";
import RootLayout from "@/layout/RootLayout";
import { useForm } from "react-hook-form";

const BlogUpload = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // fetch("/api/postBlog", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then((res)=> res.json())
    // .then((data)=> {
    //   if(data.insertedId){
    //     alert("Post Published")
    //   }
    // });
  };
  return (
    <div className="" >
      <div className="border border-slate-100 rounded-md shadow-xl p-2">
        <h1 className="text-xl font-semibold text-center">Upload New Story...</h1>
        <form
          className="mx-auto grid grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}
          name="form-data"
        >
          <input
            {...register("title")}
            placeholder="title"
            type="text"
            className="m-2 p-2"
          />
          <input
            {...register("caption")}
            placeholder="caption"
            type="text"
            className="m-2 p-2"
          />
          <input
            {...register("desc")}
            placeholder="description"
            type="text"
            className="m-2 p-2"
          />
          <input
            {...register("location")}
            placeholder="location"
            type="text"
            className="m-2 p-2"
          />
          <input
            {...register("img1")}
            placeholder="image-url-1"
            className="m-2 p-2"
          />
          <input
            {...register("img2")}
            placeholder="image-url-2"
            className="m-2 p-2"
          />
          

          <input
            {...register("img3")}
            placeholder="image-url-3"
            className="m-2 p-2"
          />
          <input
            {...register("img4")}
            placeholder="image-url-4"
            className="m-2 p-2"
          />
          <input
            {...register("published")}
            placeholder="published date"
            type="date"
            className="m-2 p-2"
          />
          
          <input
            type="submit"
            value="Create Story"
            className="m-2 p-2 border border-slate-50 hover:bg-slate-900"
          />
        </form>
      </div>
      <div className="mt-5">
        <StoryCard/>
      </div>
    </div>
  );
};

export default BlogUpload;

BlogUpload.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
