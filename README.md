# React Router Dom Nested Route Re-rendering Issue

This repository demonstrates a common issue encountered when using nested routes in React Router Dom v6.  Specifically, when a nested route is rendered, the parent route's component may not re-render, leading to unexpected UI behavior.

The problem arises when changes in the nested route's state or props don't trigger re-rendering of the parent component, even though the parent's content might depend on the nested route's state. This can make it difficult to manage data consistency between the parent and child components.

## Solution

The solution provided shows how to correctly handle the parent component's re-rendering in such scenarios. The key is to ensure that the parent component is re-rendered when necessary, either by using techniques like `useLocation` to react to URL changes or by implementing appropriate state management.