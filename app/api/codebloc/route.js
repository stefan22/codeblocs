import Codebloc from "@models/codebloc";
import { connectToDB } from "@utils/mongoDB";

export const GET = async (req) => {
    console.log('wic ',req)
    try {
        await connectToDB()

        const snippets = await Codebloc.find({}).populate('createdBy')

        return new Response(JSON.stringify(snippets), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch snippets pieces", { status: 500 })
    }
}
