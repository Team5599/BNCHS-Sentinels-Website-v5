
const Divider = () => {
  return (
    <div
      style={{
        width : '100%',
        height : '1px',
        backgroundColor : '#27272a'
      }}
    />
  )
}

const OrDivider = () => {
  return (
    <div
      style={{
        display : 'flex',
        justifyContent :'center',
        alignItems : 'center',
        width : '100%',
        gap : 10,
        marginTop : -10,
        marginBottom : -10
      }}
    >
      <div
        style={{
          width : '100%',
          height : '1px',
          backgroundColor : '#27272a'
        }}
      />
      <span
        style={{color : '#fff', fontSize : 12}}
      >
        OR
      </span>
      <div
        style={{
          width : '100%',
          height : '1px',
          backgroundColor : '#27272a'
        }}
      />
    </div>
  )
}

export {Divider, OrDivider};