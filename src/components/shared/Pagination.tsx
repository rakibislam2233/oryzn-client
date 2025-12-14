import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50">
                <ChevronLeft className="w-5 h-5" />
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold shadow-md shadow-primary/20">
                1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                3
            </button>
            <span className="text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                8
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination;
