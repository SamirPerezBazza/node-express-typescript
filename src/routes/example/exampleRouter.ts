import { Request, Response, Router } from "express";


let router = Router();

// Create here as many endpoints as you want

router.get("/dummyData", (req: Request, res: Response) => {
  try {
    const users = [
      {
        id: 1,
        name: "John",
      },
      {
        id: 2,
        name: "Jane",
      },
      {
        id: 3,
        name: "Bob",
      }
    ];

    return res.status(200).json(users);


  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

export { router as exampleRouter };