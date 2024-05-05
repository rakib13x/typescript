{
  type Something = { something: string };
  const createPromise = () => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };
  showData();

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: Todo = await res.json();
    return data;
  };
  getTodo();
}
