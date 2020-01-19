const inputValue = document.querySelector('.search-input');
const searchBtn = document.querySelector('.btn-search');
const profile = document.querySelector('.profile');

const client_id = 'Iv1.52c55ffe5a4b746f';
const client_secret = 'bece7ac37585421532bd39ac048d6e264aa2468f';

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data }
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        const markup = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${res.data.avatar_url}">
                        <a href="${res.data.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repositories: ${res.data.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${res.data.public_gists}</span>
                        <span class="badge badge-success">Followers: ${res.data.followers}</span>
                        <span class="badge badge-info">Following: ${res.data.following}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <strong>Name:</strong> ${res.data.name}</li>
                            <li class="list-group-item">
                                <strong>Bio:</strong> ${res.data.bio}</li>
                            <li class="list-group-item">
                                <strong>Website/Blog:</strong>
                                <a href="${res.data.blog}" target="_blank">${res.data.blog}</a>
                            </li>
                            <li class="list-group-item">
                                <strong>Location:</strong> ${res.data.location}</li>
                            <li class="list-group-item">
                                <strong>Member Since:</strong> ${new Date(res.data.created_at).toDateString()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        profile.insertAdjacentHTML('beforeend', markup);
    });
};

const clearField = () => {
    inputValue.value = '';
}

const clearProfile = () => {
    profile.innerHTML = '';
}

searchBtn.addEventListener('click', () => {
    showData();
    clearField();
    clearProfile();
})
