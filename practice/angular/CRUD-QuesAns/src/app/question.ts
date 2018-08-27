export class Question {
  id: number;
  categoryId: number;
  description: string;
  likes: number;
  dislikes: number;
  answers: number[];
  exists: boolean;
}
