'use client'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addToList } from "../Todolist/Redux/todoSlice";
import { useRouter } from "next/navigation";


export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const router = useRouter();
    const dispatch = useDispatch();
    const id = useSelector(state => state?.todolist?.length + 1)


    const onSubmit = (data) => {
        dispatch(addToList({ id: data?.id, title: data?.title, description: data?.description }));
        router.push('/Components/Todolist');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-yellow-200 w-[50%] mx-auto flex justify-center items-center flex-col space-y-4 py-5">
            <div className="flex flex-col items-center justify-center">
                <label>ID*</label>
                <input type="text" {...register("id", { required: true })} className="p-2 rounded-sm border-black border" />
                <div>{errors.id && <span>{errors.id.message}</span>}</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <label>Title*</label>
                <input type="text" {...register("title", { required: true })} className="p-2 rounded-sm border-black border" />
                <div>{errors.title && <span>{errors.title.message}</span>}</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <label>Description*</label>
                <input type="text" {...register("description", { required: true })} className="p-2 rounded-sm border-black border" />
                <div>{errors.description && <span>{errors.description.message}</span>}</div>
            </div>
            <input type="submit" className="px-8 py-1 bg-green-500 rounded-sm cursor-pointer" />
        </form>
    )
}