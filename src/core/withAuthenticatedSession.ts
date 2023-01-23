import {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/react";

/***
 * uma função de primeira ordem - HOF
 * @param func
 */
export function withAuthenticatedSession(func: any) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const session = await getSession({req});

        if (!session) {
            res.status(403).end(`Acesso negado`);
            return
        }

        const result = await func(req, res);
        return result;
    }
}