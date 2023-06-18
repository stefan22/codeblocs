import Codebloc from "@models/codebloc";
import { connectToDB } from "@utils/mongoDB";

const POST = async (req) => {
    console.log('req ,, ',req)
    const { userId, codebloc, tag } = await req.json();

    try {
        await connectToDB();
        const newCode = new Codebloc({
            createdBy: userId,
            codebloc, tag
        });

        await newCode.save();
        return new Response(
            JSON.stringify(newCode), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}

export { POST }

