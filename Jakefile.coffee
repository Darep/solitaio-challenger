
desc 'Run test watcher'
task 'test', ->
    jake.exec ['mocha test/'], { stdout: true}, () ->
        complete


desc 'Deploy to production'
task 'deploy', ->
    console.log '-----> Deploying...'

    cmds = [
        #'git add .',
        #'git ci',
        #'git push',
        'cd ~/Sites/prod && git pull && npm install'
    ]

    jake.exec cmds, { printStdOut: true }, () ->
        console.log 'OK'
        complete


task 'default', ['deploy']
