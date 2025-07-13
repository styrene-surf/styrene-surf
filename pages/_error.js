// pages/_error.js
export default function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Une erreur ${statusCode} est survenue sur le serveur.`
        : 'Une erreur est survenue sur le client.'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
