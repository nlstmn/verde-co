import { ThemeProvider } from "styled-components";
import { TopNav } from "components/TopNav";
import { useSelector } from "react-redux";
import { theme } from "./theme";
import Routes from "./app/routes";

function App() {
  const { posts } = useSelector((state) => state.posts);
  const userPosts = posts?.filter((post) => post.userId === 1);
  return (
    <ThemeProvider theme={theme}>
      <TopNav postCount={userPosts.length} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
