type LoadingProps = {
  isLoading?: boolean;
}

export function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) {
    return null;
  }
  return (
    <h1>Loading...</h1>
  );

}
