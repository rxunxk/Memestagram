import ContentLoader from "react-content-loader";

export const PostLoader = (props) => (
  <div className="flex flex-col gap-4">
    <ContentLoader
      speed={1}
      width={600}
      height={500}
      viewBox="0 0 600 500"
      backgroundColor="#333"
      foregroundColor="#8f8f8f"
      style={{ width: "100%" }}
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="600" height="500" />
    </ContentLoader>
    <ContentLoader
      speed={1}
      width={600}
      height={500}
      viewBox="0 0 600 500"
      backgroundColor="#333"
      foregroundColor="#8f8f8f"
      style={{ width: "100%" }}
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="600" height="500" />
    </ContentLoader>
  </div>
);
