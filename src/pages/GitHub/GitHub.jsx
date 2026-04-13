import React, { useState } from "react";

const gitSections = [
  {
    title: "Git Basics",
    content: `• git clone: used to create a local copy of a remote repository
• git branch: used to create, list, and delete branches
• git checkout: used to switch between branches
• git add: used to stage changes for commit
• git commit: used to save changes to the local repository
• git push: used to upload local commits to a remote repository`
  },
  {
    title: "Git Commands List",
    content: `• git config
• git init
• git clone
• git add
• git commit
• git diff
• git reset
• git status
• git rm
• git log
• git show
• git tag
• git branch
• git checkout
• git merge
• git remote
• git push
• git pull
• git stash
• git rebase
• git reflog
• git cherry-pick
• git bisect
• git log -p
• git log -S
• git format-patch
• git apply --check
• git am`
  }
];

const GitHub = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 pt-36">
         <h1 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-8">
          Github
        </h1>
      {gitSections.map((section, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300"
        >
          <button
            onClick={() => toggleBox(index)}
            className="w-full text-left px-6 py-4 font-semibold text-xl bg-gray-100 rounded-t-2xl"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="p-6 whitespace-pre-wrap text-gray-700">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GitHub;
