import TodosList from "./TodosList";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <div>
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
};
export default RootLayout;
