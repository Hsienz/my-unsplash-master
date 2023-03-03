import { NextApiRequest, NextApiResponse } from "next";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { firestore } from "@/lib/firebase";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method == "POST") {
		const docRef = doc(firestore, "unsplash", uuidv4());
		const body = {
			...req.body,
			timestamp: serverTimestamp(),
		};
		await setDoc(docRef, body);
		res.status(201).redirect('/');
	}
};

export default handler;
