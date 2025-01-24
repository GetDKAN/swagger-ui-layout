type SpanOpenAPIVersionProps = {
  oasVersion: string;
}

const SpanOpenAPIVersion = function(system: any) {
  return {
    wrapComponents: {
      OpenAPIVersion: (Original: any, system: any) => (props: SpanOpenAPIVersionProps) => {
        const classList = "version version-stamp version-stamp--openapi version-stamp--span";
        const { oasVersion } = props;
        return (
          <span className={classList}>
            { oasVersion }
          </span>
        );
      }
    }
  }
};

export default SpanOpenAPIVersion;
