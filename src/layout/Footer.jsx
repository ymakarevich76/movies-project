function Footer() {
    return <footer className="page-footer blue lighten-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/ymakarevich76/movies-project">Repo</a>
            </div>
        </div>
    </footer>
}

export { Footer }