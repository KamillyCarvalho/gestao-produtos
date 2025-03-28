// 'use client'
// import { FormEvent } from 'react'
// import { useUser } from '../Contexts/UserContext'
 
// export default function Pagina() {

//   const { login } = useUser()

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
 
//     const formData = new FormData(event.currentTarget)
//     const loginUsuario = formData.get('login')
//     const senhaUsuario = formData.get('senha')
 
//     await login(loginUsuario, senhaUsuario)
//   }
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="login" name="login" placeholder="login" required autoFocus />
//       <input type="senha" name="senha" placeholder="senha" required />
//       <button type="submit">Login</button>
//     </form>
//   )
// }

// import { useUser } from '../Contexts/UserContext'

// import { signIn } from "next-auth/react"
// import Link from 'next/link'

// const handleSubmit = ()
// export default function Pagina() {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="login" name="login" placeholder="login" required autoFocus />
//       <input type="password" name="senha" placeholder="senha" required />
//       <button type="submit">Login</button>

//       <br/>

//       <Link href='/auth/recuperar_senha'>Recuperar senha</Link>
//       <hr/>
//       <p>Ou</p>
//       <button type="button" onClick={() => signIn("google", { redirectTo: "/" })}>Faça login com o Google</button>
//     </form>
//   )
// }


'use client'
import { FormEvent } from 'react'
import { useUser } from '../Contexts/UserContext'
import "../globals.css"
import { signIn } from "next-auth/react"
import Link from 'next/link'
 
export default function Pagina() {

  const { login } = useUser() || {}


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() //previne o recarregamento da página 
    const formData = new FormData(event.currentTarget)
    const loginUsuario = formData.get('login')
    const senhaUsuario = formData.get('senha')
 
    try {
      await login(loginUsuario, senhaUsuario)
    } catch(e) {
      console.log("Erro de login", e)
      alert("Usuário inválido")
    }
  }
 
  return (
    <>
      <html lang="en"/>
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Nova-senha</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
      </head>
      <body>
        <div className="top-bar">
            <div className="logo">Electronic's Place</div>
            <div className="user-area">
                <a  href="/carrinho">
                    <img className="button-img button-img2"/>
                </a>
                <a href="/login">
                    <img className="button-img button-img1"/>
                </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} id="form">
              <div id="login-container">
                  <h2 className="h3 mb-3 fw-normal text-center">Please sign in</h2>
          
                  <div className="form-floating mb-2">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label htmlFor="floatingInput">Email address</label>
                  </div>
          
                  <div className="form-floating mb-2">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                      <label htmlFor="floatingPassword">Password</label>
                  </div>
                  
                  <Link href='/auth/recuperar_senha/page.tsx'>Recuperar senha</Link>
                  <hr/>
                  <p>Ou</p>

                  <button type="button" onClick={() => signIn("google", { redirectTo: "/" })}>Faça login com o Google</button>
                  <br/>
                  <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
              </div>  
          </form>
      </body>
    </>
  )
}