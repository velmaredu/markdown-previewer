import { createSlice } from "@reduxjs/toolkit";

const initialState = `# Heading 1
## Heading 2
### Heading 3
\`inline block\`
[link](https://github.com/velmaredu)
\`\`\`
Multiline
code
\`\`\`
**Ordered list**
1. First member
1. Second member

> Block Quote!

![Markdown Logo](https://raw.githubusercontent.com/velmaredu/markdown-previewer/master/src/assets/images/markdown-demo.png)
`;

const markdownSlice = createSlice({
  name: "markdown",
  initialState: initialState,
  reducers: {
    setMarkdown: (state, action) => {
      return action.payload !== undefined ? action.payload : initialState;
    },
  },
});

export const { setMarkdown } = markdownSlice.actions;

export default markdownSlice.reducer;
