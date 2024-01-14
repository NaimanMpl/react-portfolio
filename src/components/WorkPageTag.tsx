interface WorkPageTagProps {
  title: string,
  value: string
}

const WorkPageTag = (props: WorkPageTagProps) => {
  const { title, value } = props;

  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    width: '20rem',
  }

  return (
    <div style={style} className='work-page-tag'>
      <h3 style={{ fontWeight: 'normal', textTransform: 'uppercase', fontSize: '.8rem', color: '#888888' }}>{title}</h3>
      <div style={{ background: 'var(--light-gray)', width: '100%', height: '1px' }} className="work-page-tag--separator">

      </div>
      <span>{value}</span>
    </div>
  );
}

export default WorkPageTag;