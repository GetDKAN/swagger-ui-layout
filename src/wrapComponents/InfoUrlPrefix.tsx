const InfoUrlPrefix = function(system: any) {
  return {
    wrapComponents: {
      InfoUrl: (Original: any, system: any) => (props : any) => {
        return (
          <>
            <span>API documentation sources (JSON): </span><Original {...props} />
          </>
        )
      }
    }
  }
}

export default InfoUrlPrefix;