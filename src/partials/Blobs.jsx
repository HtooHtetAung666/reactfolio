import React from 'react'

const Blobs = () => {
    return (
        <>
            {/* phone screen size */}
            <div className="absolute top-0 left-0 bg-blue-900 rounded-full blur-lg opacity-80 animate-blob w-64 h-64 md:hidden"></div>
            <div className="absolute -bottom-10 left-10 bg-fuchsia-900 rounded-full blur-lg opacity-80 animate-blob animation-delay-2000 w-64 h-64 md:hidden"></div>
            {/* tablet and pc screen size */}
            <div className="absolute top-0 -left-4 bg-blue-900 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob w-64 h-64 hidden md:block"></div>
            <div className="absolute top-0 -right-4 bg-fuchsia-900 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-2000 w-64 h-64 hidden md:block"></div>
            <div className="absolute -bottom-8 left-20 bg-slate-900 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-4000 w-72 h-72 hidden md:block"></div>
        </>
    )
}

export default Blobs