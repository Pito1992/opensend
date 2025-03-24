import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/elements/button'
import { HOME_PATH } from '@/constants/routes'

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          404 - Page Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for. Please check the
          URL or navigate back to the homepage.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="default" asChild className="flex items-center gap-2">
            <Link to={HOME_PATH}>
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
